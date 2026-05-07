import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy526 } from '../generated/copy/copy526';
import { layout526 } from '../generated/layouts/layout526';
import { palette526 } from '../generated/palettes/palette526';

const RuntimeView526 = withUniwind(View);

export function Screen526() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView526 styleClassName={layout526.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy526.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy526.detail} / {palette526.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
