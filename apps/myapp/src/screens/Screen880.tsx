import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy880 } from '../generated/copy/copy880';
import { layout880 } from '../generated/layouts/layout880';
import { palette880 } from '../generated/palettes/palette880';

const RuntimeView880 = withUniwind(View);

export function Screen880() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView880 styleClassName={layout880.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy880.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy880.detail} / {palette880.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
