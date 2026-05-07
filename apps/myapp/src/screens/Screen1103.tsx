import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1103 } from '../generated/copy/copy1103';
import { layout1103 } from '../generated/layouts/layout1103';
import { palette1103 } from '../generated/palettes/palette1103';

const RuntimeView1103 = withUniwind(View);

export function Screen1103() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1103 styleClassName={layout1103.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy1103.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1103.detail} / {palette1103.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
