import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy448 } from '../generated/copy/copy448';
import { layout448 } from '../generated/layouts/layout448';
import { palette448 } from '../generated/palettes/palette448';

const RuntimeView448 = withUniwind(View);

export function Screen448() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView448 styleClassName={layout448.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy448.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy448.detail} / {palette448.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
