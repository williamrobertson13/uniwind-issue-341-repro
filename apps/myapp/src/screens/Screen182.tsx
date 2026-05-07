import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy182 } from '../generated/copy/copy182';
import { layout182 } from '../generated/layouts/layout182';
import { palette182 } from '../generated/palettes/palette182';

const RuntimeView182 = withUniwind(View);

export function Screen182() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView182 styleClassName={layout182.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy182.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy182.detail} / {palette182.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
