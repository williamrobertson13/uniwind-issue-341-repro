import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1026 } from '../generated/copy/copy1026';
import { layout1026 } from '../generated/layouts/layout1026';
import { palette1026 } from '../generated/palettes/palette1026';

const RuntimeView1026 = withUniwind(View);

export function Screen1026() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-10 bg-blue-700 rounded-full" />
			<RuntimeView1026 styleClassName={layout1026.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1026.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1026.detail} / {palette1026.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
