import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy70 } from '../generated/copy/copy70';
import { layout70 } from '../generated/layouts/layout70';
import { palette70 } from '../generated/palettes/palette70';

const RuntimeView70 = withUniwind(View);

export function Screen70() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView70 styleClassName={layout70.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy70.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy70.detail} / {palette70.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
