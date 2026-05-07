import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy272 } from '../generated/copy/copy272';
import { layout272 } from '../generated/layouts/layout272';
import { palette272 } from '../generated/palettes/palette272';

const RuntimeView272 = withUniwind(View);

export function Screen272() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView272 styleClassName={layout272.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy272.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy272.detail} / {palette272.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
