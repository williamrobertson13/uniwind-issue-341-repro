import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1289 } from '../generated/copy/copy1289';
import { layout1289 } from '../generated/layouts/layout1289';
import { palette1289 } from '../generated/palettes/palette1289';

const RuntimeView1289 = withUniwind(View);

export function Screen1289() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView1289 styleClassName={layout1289.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1289.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1289.detail} / {palette1289.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
