import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1207 } from '../generated/copy/copy1207';
import { layout1207 } from '../generated/layouts/layout1207';
import { palette1207 } from '../generated/palettes/palette1207';

const RuntimeView1207 = withUniwind(View);

export function Screen1207() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1207 styleClassName={layout1207.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1207.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1207.detail} / {palette1207.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
