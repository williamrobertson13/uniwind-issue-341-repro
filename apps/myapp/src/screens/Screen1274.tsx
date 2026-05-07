import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1274 } from '../generated/copy/copy1274';
import { layout1274 } from '../generated/layouts/layout1274';
import { palette1274 } from '../generated/palettes/palette1274';

const RuntimeView1274 = withUniwind(View);

export function Screen1274() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView1274 styleClassName={layout1274.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1274.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1274.detail} / {palette1274.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
