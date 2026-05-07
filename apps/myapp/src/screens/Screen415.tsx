import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy415 } from '../generated/copy/copy415';
import { layout415 } from '../generated/layouts/layout415';
import { palette415 } from '../generated/palettes/palette415';

const RuntimeView415 = withUniwind(View);

export function Screen415() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-11 bg-blue-800 rounded-full" />
			<RuntimeView415 styleClassName={layout415.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy415.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy415.detail} / {palette415.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
