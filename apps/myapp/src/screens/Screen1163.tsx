import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1163 } from '../generated/copy/copy1163';
import { layout1163 } from '../generated/layouts/layout1163';
import { palette1163 } from '../generated/palettes/palette1163';

const RuntimeView1163 = withUniwind(View);

export function Screen1163() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView1163 styleClassName={layout1163.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1163.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1163.detail} / {palette1163.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
