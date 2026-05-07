import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy16 } from '../generated/copy/copy16';
import { layout16 } from '../generated/layouts/layout16';
import { palette16 } from '../generated/palettes/palette16';

const RuntimeView16 = withUniwind(View);

export function Screen16() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView16 styleClassName={layout16.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy16.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy16.detail} / {palette16.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
