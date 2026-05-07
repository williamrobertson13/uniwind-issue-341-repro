import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy767 } from '../generated/copy/copy767';
import { layout767 } from '../generated/layouts/layout767';
import { palette767 } from '../generated/palettes/palette767';

const RuntimeView767 = withUniwind(View);

export function Screen767() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView767 styleClassName={layout767.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy767.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy767.detail} / {palette767.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
