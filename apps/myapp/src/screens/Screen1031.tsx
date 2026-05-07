import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1031 } from '../generated/copy/copy1031';
import { layout1031 } from '../generated/layouts/layout1031';
import { palette1031 } from '../generated/palettes/palette1031';

const RuntimeView1031 = withUniwind(View);

export function Screen1031() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1031 styleClassName={layout1031.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1031.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1031.detail} / {palette1031.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
