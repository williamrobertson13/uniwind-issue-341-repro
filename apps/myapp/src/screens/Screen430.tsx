import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy430 } from '../generated/copy/copy430';
import { layout430 } from '../generated/layouts/layout430';
import { palette430 } from '../generated/palettes/palette430';

const RuntimeView430 = withUniwind(View);

export function Screen430() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView430 styleClassName={layout430.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy430.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy430.detail} / {palette430.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
