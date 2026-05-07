import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy815 } from '../generated/copy/copy815';
import { layout815 } from '../generated/layouts/layout815';
import { palette815 } from '../generated/palettes/palette815';

const RuntimeView815 = withUniwind(View);

export function Screen815() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView815 styleClassName={layout815.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy815.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy815.detail} / {palette815.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
