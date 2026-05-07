import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy93 } from '../generated/copy/copy93';
import { layout93 } from '../generated/layouts/layout93';
import { palette93 } from '../generated/palettes/palette93';

const RuntimeView93 = withUniwind(View);

export function Screen93() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView93 styleClassName={layout93.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy93.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy93.detail} / {palette93.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
