import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1088 } from '../generated/copy/copy1088';
import { layout1088 } from '../generated/layouts/layout1088';
import { palette1088 } from '../generated/palettes/palette1088';

const RuntimeView1088 = withUniwind(View);

export function Screen1088() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1088 styleClassName={layout1088.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1088.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1088.detail} / {palette1088.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
