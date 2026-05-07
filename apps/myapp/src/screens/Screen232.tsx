import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy232 } from '../generated/copy/copy232';
import { layout232 } from '../generated/layouts/layout232';
import { palette232 } from '../generated/palettes/palette232';

const RuntimeView232 = withUniwind(View);

export function Screen232() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView232 styleClassName={layout232.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy232.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy232.detail} / {palette232.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
