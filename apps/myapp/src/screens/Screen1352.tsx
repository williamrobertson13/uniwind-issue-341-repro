import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1352 } from '../generated/copy/copy1352';
import { layout1352 } from '../generated/layouts/layout1352';
import { palette1352 } from '../generated/palettes/palette1352';

const RuntimeView1352 = withUniwind(View);

export function Screen1352() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1352 styleClassName={layout1352.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy1352.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1352.detail} / {palette1352.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
