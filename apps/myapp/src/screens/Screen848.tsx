import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy848 } from '../generated/copy/copy848';
import { layout848 } from '../generated/layouts/layout848';
import { palette848 } from '../generated/palettes/palette848';

const RuntimeView848 = withUniwind(View);

export function Screen848() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView848 styleClassName={layout848.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy848.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy848.detail} / {palette848.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
