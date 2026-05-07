import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1168 } from '../generated/copy/copy1168';
import { layout1168 } from '../generated/layouts/layout1168';
import { palette1168 } from '../generated/palettes/palette1168';

const RuntimeView1168 = withUniwind(View);

export function Screen1168() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView1168 styleClassName={layout1168.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1168.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1168.detail} / {palette1168.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
