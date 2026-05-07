import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1159 } from '../generated/copy/copy1159';
import { layout1159 } from '../generated/layouts/layout1159';
import { palette1159 } from '../generated/palettes/palette1159';

const RuntimeView1159 = withUniwind(View);

export function Screen1159() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView1159 styleClassName={layout1159.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1159.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1159.detail} / {palette1159.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
