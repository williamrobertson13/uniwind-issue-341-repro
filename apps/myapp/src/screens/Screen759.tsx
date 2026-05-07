import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy759 } from '../generated/copy/copy759';
import { layout759 } from '../generated/layouts/layout759';
import { palette759 } from '../generated/palettes/palette759';

const RuntimeView759 = withUniwind(View);

export function Screen759() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView759 styleClassName={layout759.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy759.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy759.detail} / {palette759.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
