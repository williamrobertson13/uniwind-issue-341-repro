import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1376 } from '../generated/copy/copy1376';
import { layout1376 } from '../generated/layouts/layout1376';
import { palette1376 } from '../generated/palettes/palette1376';

const RuntimeView1376 = withUniwind(View);

export function Screen1376() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-semibold text-gray-900');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView1376 styleClassName={layout1376.rhythm} />
			<Pressable className="px-4 py-1 bg-purple-900 active:bg-purple-700 rounded-md">
				<Text className="text-base font-semibold text-gray-900" style={resolvedStyle}>{copy1376.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1376.detail} / {palette1376.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
