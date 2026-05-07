import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy983 } from '../generated/copy/copy983';
import { layout983 } from '../generated/layouts/layout983';
import { palette983 } from '../generated/palettes/palette983';

const RuntimeView983 = withUniwind(View);

export function Screen983() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView983 styleClassName={layout983.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy983.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy983.detail} / {palette983.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
