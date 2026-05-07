import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy191 } from '../generated/copy/copy191';
import { layout191 } from '../generated/layouts/layout191';
import { palette191 } from '../generated/palettes/palette191';

const RuntimeView191 = withUniwind(View);

export function Screen191() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView191 styleClassName={layout191.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy191.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy191.detail} / {palette191.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
