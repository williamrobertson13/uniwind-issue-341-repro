import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy556 } from '../generated/copy/copy556';
import { layout556 } from '../generated/layouts/layout556';
import { palette556 } from '../generated/palettes/palette556';

const RuntimeView556 = withUniwind(View);

export function Screen556() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView556 styleClassName={layout556.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy556.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy556.detail} / {palette556.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
